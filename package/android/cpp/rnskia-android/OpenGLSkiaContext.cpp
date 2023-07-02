#include "RNSKLog.h"

#include "OpenGLSkiaContext.h"

#include "SkColorSpace.h"

#define GL_RGBA8 0x8058

namespace RNSkia {

OpenGLSkiaContext::OpenGLSkiaContext() {
    // 1. Create a Display
    _display = std::make_unique<Display>();
    // 2. Choose a Config
    ConfigDescriptor desc;
    desc.api = API::kOpenGLES2;
    desc.color_format = ColorFormat::kRGBA8888;
    desc.depth_bits = DepthBits::kZero;
    desc.stencil_bits = StencilBits::kEight;
    desc.samples = Samples::kFour;
    desc.surface_type = SurfaceType::kPBuffer;
    _config = _display->ChooseConfig(desc);
    // 3. Fallback for Android emulator
    if (!_config) {
        desc.samples = Samples::kOne;
        _config = _display->ChooseConfig(desc);
        if (_config) {
            RNSkLogger::logToConsole("Falling back to a single sample (device doesn't support MSAA)");
        } else {
            RNSkLogger::logToConsole("Couldn't choose an offscreen config");
            return;
        }
    }

    _context = _display->CreateContext(*_config, nullptr);
    if (!_context) {
        RNSkLogger::logToConsole("Couldn't create a context");
        return;
    }
    _surface = _display->CreatePixelBufferSurface(*_config, 1, 1);
    if (!_context->MakeCurrent(*_surface)) {
        RNSkLogger::logToConsole("Couldn't create a context");
        return;
    }
    auto backendInterface = GrGLMakeNativeInterface();
    _grContext = GrDirectContext::MakeGL();
    if (!_grContext) {
        RNSkLogger::logToConsole("Could not create GrContext!");
    }
}

OpenGLSkiaContext::~OpenGLSkiaContext() {
}

sk_sp<SkSurface> OpenGLSkiaContext::MakeOffscreenSurface(int width, int height) {
    if (!_grContext) {
        RNSkLogger::logToConsole("GrContext is not initialized!");
        return nullptr;
    }

    // Create a new PBuffer surface with desired width and height
    auto eglSurface = _display->CreatePixelBufferSurface(*_config, width, height);
    if (!_context->MakeCurrent(*eglSurface)) {
        RNSkLogger::logToConsole("Couldn't make context current");
        return nullptr;
    }
    _surfaces.push_back(std::move(eglSurface));  // Store the surface for deletion later

    auto desc = _config->GetDescriptor();

    GrGLFramebufferInfo info;
    info.fFBOID = 0;
    info.fFormat = GL_RGBA8;

    auto samples = static_cast<int>(desc.samples);
    int stencilBits = static_cast<int>(desc.stencil_bits);

    // TODO: Should clean the eglSurface? Is is getting deleted too soon?
    GrBackendRenderTarget backendRT(width, height, samples, stencilBits, info);
    sk_sp<SkSurface> surface = SkSurface::MakeFromBackendRenderTarget(_grContext.get(), backendRT, kBottomLeft_GrSurfaceOrigin, kRGBA_8888_SkColorType, nullptr, nullptr);
    if (!surface) {
        RNSkLogger::logToConsole("Failed to create offscreen surface");
    }

    return surface;
}

} // namespace RNSkia