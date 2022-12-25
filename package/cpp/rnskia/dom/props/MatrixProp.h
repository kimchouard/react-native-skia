#pragma once

#include "DerivedNodeProp.h"
#include "JsiSkMatrix.h"

#include <memory>

namespace RNSkia {

static PropId PropNameMatrix = JsiPropId::get("matrix");

class MatrixProp : public DerivedProp<SkMatrix> {
public:
  explicit MatrixProp(PropId name, PropertyDidUpdateCallback &propertyDidUpdate)
      : DerivedProp<SkMatrix>(propertyDidUpdate) {
    _matrixProp = addProperty<NodeProp>(name);
  }

  void updateDerivedValue() override {
    if (_matrixProp->isSet() &&
        _matrixProp->value().getType() == PropType::HostObject) {
      // Try reading as SkMatrix
      auto matrix = _matrixProp->value().getAs<JsiSkMatrix>();
      if (matrix != nullptr) {
        setDerivedValue(matrix->getObject());
      }
    }
  }

private:
  NodeProp *_matrixProp;
};

} // namespace RNSkia
