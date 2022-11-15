      ts.isStringLiteral(this) ? "StringLiteral ".concat(JSON.stringify(this.text.length < 10 ? this.text : this.text.slice(10) + "...")) :
                                                ts.isNumericLiteral(this) ? "NumericLiteral ".concat(this.text) :
                                                    ts.isBigIntLiteral(this) ? "BigIntLiteral ".concat(this.text, "n") :
                                                        ts.isTypeParameterDeclaration(this) ? "TypeParameterDeclaration" :
                                                            ts.isParameter(this) ? "ParameterDeclaration" :
                                                                ts.isConstructorDeclaration(this) ? "ConstructorDeclaration" :
                                                                    ts.isGetAccessorDeclaration(this) ? "GetAccessorDeclaration" :
                                                                        ts.isSetAccessorDeclaration(this) ? "SetAccessorDeclaration" :
                                                                            ts.isCallSignatureDeclaration(this) ? "CallSignatureDeclaration" :
                                                                                ts.isConstructSignatureDeclaration(this) ? "ConstructSignatureDeclaration" :
                                                                                    ts.isIndexSignatureDeclaration(this) ? "IndexSignatureDeclaration" :
                                                                                        ts.isTypePredicateNode(this) ? "TypePredicateNode" :
                                                                                            ts.isTypeReferenceNode(this) ? "TypeReferenceNode" :
                                                                                                ts.isFunctionTypeNode(this) ? "FunctionTypeNode" :
                                                                                                    ts.isConstructorTypeNode(this) ? "ConstructorTypeNode" :
                                                                                                        ts.isTypeQueryNode(this) ? "TypeQueryNode" :
                                                                                                            ts.isTypeLiteralNode(this) ? "TypeLiteralNode" :
                                                                                                                ts.isArrayTypeNode(this) ? "ArrayTypeNode" :
                                                                                                                    ts.isTupleTypeNode(this) ? "TupleTypeNode" :
                                                                                                                        ts.isOptionalTypeNode(this) ? "OptionalTypeNode" :
                                                                                                                            ts.isRestTypeNode(this) ? "RestTypeNode" :
                                                                                                                                ts.isUnionTypeNode(this) ? "UnionTypeNode" :
                                                                                                                                    ts.isIntersectionTypeNode(this) ? "IntersectionTyp