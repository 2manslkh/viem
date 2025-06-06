import { expect, test } from 'vitest'

import * as exports from './index.js'

test('exports', () => {
  expect(Object.keys(exports)).toMatchInlineSnapshot(`
    [
      "CircularReferenceError",
      "InvalidAbiParameterError",
      "InvalidAbiParametersError",
      "InvalidAbiItemError",
      "InvalidAbiTypeParameterError",
      "InvalidFunctionModifierError",
      "InvalidModifierError",
      "InvalidParameterError",
      "InvalidParenthesisError",
      "InvalidSignatureError",
      "InvalidStructSignatureError",
      "SolidityProtectedKeywordError",
      "UnknownTypeError",
      "UnknownSignatureError",
      "parseAbi",
      "parseAbiItem",
      "parseAbiParameter",
      "parseAbiParameters",
      "getContract",
      "createClient",
      "rpcSchema",
      "custom",
      "fallback",
      "shouldThrow",
      "http",
      "createPublicClient",
      "createTestClient",
      "publicActions",
      "testActions",
      "walletActions",
      "createTransport",
      "createWalletClient",
      "webSocket",
      "multicall3Abi",
      "erc20Abi",
      "erc20Abi_bytes32",
      "erc721Abi",
      "erc4626Abi",
      "universalSignatureValidatorAbi",
      "ethAddress",
      "zeroAddress",
      "deploylessCallViaBytecodeBytecode",
      "deploylessCallViaFactoryBytecode",
      "universalSignatureValidatorByteCode",
      "etherUnits",
      "gweiUnits",
      "weiUnits",
      "maxInt8",
      "maxInt16",
      "maxInt24",
      "maxInt32",
      "maxInt40",
      "maxInt48",
      "maxInt56",
      "maxInt64",
      "maxInt72",
      "maxInt80",
      "maxInt88",
      "maxInt96",
      "maxInt104",
      "maxInt112",
      "maxInt120",
      "maxInt128",
      "maxInt136",
      "maxInt144",
      "maxInt152",
      "maxInt160",
      "maxInt168",
      "maxInt176",
      "maxInt184",
      "maxInt192",
      "maxInt200",
      "maxInt208",
      "maxInt216",
      "maxInt224",
      "maxInt232",
      "maxInt240",
      "maxInt248",
      "maxInt256",
      "maxUint8",
      "maxUint16",
      "maxUint24",
      "maxUint32",
      "maxUint40",
      "maxUint48",
      "maxUint56",
      "maxUint64",
      "maxUint72",
      "maxUint80",
      "maxUint88",
      "maxUint96",
      "maxUint104",
      "maxUint112",
      "maxUint120",
      "maxUint128",
      "maxUint136",
      "maxUint144",
      "maxUint152",
      "maxUint160",
      "maxUint168",
      "maxUint176",
      "maxUint184",
      "maxUint192",
      "maxUint200",
      "maxUint208",
      "maxUint216",
      "maxUint224",
      "maxUint232",
      "maxUint240",
      "maxUint248",
      "maxUint256",
      "minInt8",
      "minInt16",
      "minInt24",
      "minInt32",
      "minInt40",
      "minInt48",
      "minInt56",
      "minInt64",
      "minInt72",
      "minInt80",
      "minInt88",
      "minInt96",
      "minInt104",
      "minInt112",
      "minInt120",
      "minInt128",
      "minInt136",
      "minInt144",
      "minInt152",
      "minInt160",
      "minInt168",
      "minInt176",
      "minInt184",
      "minInt192",
      "minInt200",
      "minInt208",
      "minInt216",
      "minInt224",
      "minInt232",
      "minInt240",
      "minInt248",
      "minInt256",
      "zeroHash",
      "presignMessagePrefix",
      "AbiConstructorNotFoundError",
      "AbiConstructorParamsNotFoundError",
      "AbiDecodingDataSizeInvalidError",
      "AbiDecodingDataSizeTooSmallError",
      "AbiDecodingZeroDataError",
      "AbiEncodingArrayLengthMismatchError",
      "AbiEncodingLengthMismatchError",
      "AbiEncodingBytesSizeMismatchError",
      "AbiErrorInputsNotFoundError",
      "AbiErrorNotFoundError",
      "AbiErrorSignatureNotFoundError",
      "AbiEventNotFoundError",
      "AbiEventSignatureEmptyTopicsError",
      "AbiEventSignatureNotFoundError",
      "AbiFunctionNotFoundError",
      "AbiFunctionOutputsNotFoundError",
      "AbiFunctionSignatureNotFoundError",
      "BytesSizeMismatchError",
      "DecodeLogDataMismatch",
      "DecodeLogTopicsMismatch",
      "InvalidAbiDecodingTypeError",
      "InvalidAbiEncodingTypeError",
      "InvalidArrayError",
      "InvalidDefinitionTypeError",
      "UnsupportedPackedAbiType",
      "BaseError",
      "setErrorConfig",
      "BlockNotFoundError",
      "CallExecutionError",
      "ContractFunctionExecutionError",
      "ContractFunctionRevertedError",
      "ContractFunctionZeroDataError",
      "RawContractError",
      "CounterfactualDeploymentFailedError",
      "BaseFeeScalarError",
      "Eip1559FeesNotSupportedError",
      "MaxFeePerGasTooLowError",
      "ChainDisconnectedError",
      "InternalRpcError",
      "InvalidInputRpcError",
      "InvalidParamsRpcError",
      "InvalidRequestRpcError",
      "JsonRpcVersionUnsupportedError",
      "LimitExceededRpcError",
      "MethodNotFoundRpcError",
      "MethodNotSupportedRpcError",
      "ParseRpcError",
      "ProviderDisconnectedError",
      "ProviderRpcError",
      "ResourceNotFoundRpcError",
      "ResourceUnavailableRpcError",
      "RpcError",
      "SwitchChainError",
      "TransactionRejectedRpcError",
      "UnauthorizedProviderError",
      "UnknownRpcError",
      "UnsupportedProviderMethodError",
      "UserRejectedRequestError",
      "ChainDoesNotSupportContract",
      "ChainMismatchError",
      "ChainNotFoundError",
      "ClientChainNotConfiguredError",
      "InvalidChainIdError",
      "InvalidBytesBooleanError",
      "IntegerOutOfRangeError",
      "InvalidHexBooleanError",
      "InvalidHexValueError",
      "SizeOverflowError",
      "EnsAvatarUriResolutionError",
      "EnsAvatarInvalidNftUriError",
      "EnsAvatarUnsupportedNamespaceError",
      "InvalidDecimalNumberError",
      "EstimateGasExecutionError",
      "ExecutionRevertedError",
      "FeeCapTooHighError",
      "FeeCapTooLowError",
      "InsufficientFundsError",
      "IntrinsicGasTooHighError",
      "IntrinsicGasTooLowError",
      "NonceMaxValueError",
      "NonceTooHighError",
      "NonceTooLowError",
      "TipAboveFeeCapError",
      "TransactionTypeNotSupportedError",
      "UnknownNodeError",
      "FilterTypeNotSupportedError",
      "HttpRequestError",
      "RpcRequestError",
      "TimeoutError",
      "SocketClosedError",
      "WebSocketRequestError",
      "InvalidAddressError",
      "FeeConflictError",
      "InvalidLegacyVError",
      "InvalidSerializableTransactionError",
      "InvalidSerializedTransactionError",
      "InvalidSerializedTransactionTypeError",
      "InvalidStorageKeySizeError",
      "TransactionExecutionError",
      "TransactionNotFoundError",
      "TransactionReceiptNotFoundError",
      "WaitForTransactionReceiptTimeoutError",
      "SizeExceedsPaddingSizeError",
      "SliceOffsetOutOfBoundsError",
      "UrlRequiredError",
      "AccountStateConflictError",
      "StateAssignmentConflictError",
      "InvalidDomainError",
      "InvalidPrimaryTypeError",
      "InvalidStructTypeError",
      "EIP1193ProviderRpcError",
      "labelhash",
      "namehash",
      "defineBlock",
      "formatBlock",
      "formatLog",
      "decodeAbiParameters",
      "decodeDeployData",
      "decodeErrorResult",
      "decodeEventLog",
      "decodeFunctionData",
      "decodeFunctionResult",
      "encodeAbiParameters",
      "encodeDeployData",
      "encodeErrorResult",
      "encodeEventTopics",
      "encodeFunctionData",
      "prepareEncodeFunctionData",
      "encodeFunctionResult",
      "parseEventLogs",
      "defineTransaction",
      "formatTransaction",
      "transactionType",
      "defineTransactionReceipt",
      "formatTransactionReceipt",
      "defineTransactionRequest",
      "formatTransactionRequest",
      "rpcTransactionType",
      "getAbiItem",
      "getContractAddress",
      "getCreate2Address",
      "getCreateAddress",
      "getSerializedTransactionType",
      "getTransactionType",
      "hashDomain",
      "hashStruct",
      "hashTypedData",
      "compactSignatureToSignature",
      "hexToCompactSignature",
      "parseCompactSignature",
      "hexToSignature",
      "parseSignature",
      "recoverAddress",
      "recoverMessageAddress",
      "recoverPublicKey",
      "recoverTransactionAddress",
      "recoverTypedDataAddress",
      "signatureToCompactSignature",
      "compactSignatureToHex",
      "serializeCompactSignature",
      "signatureToHex",
      "serializeSignature",
      "bytesToRlp",
      "hexToRlp",
      "toRlp",
      "verifyHash",
      "verifyMessage",
      "verifyTypedData",
      "parseErc6492Signature",
      "isErc6492Signature",
      "serializeErc6492Signature",
      "assertRequest",
      "assertTransactionEIP1559",
      "assertTransactionEIP2930",
      "assertTransactionLegacy",
      "boolToBytes",
      "hexToBytes",
      "numberToBytes",
      "stringToBytes",
      "toBytes",
      "boolToHex",
      "bytesToHex",
      "numberToHex",
      "stringToHex",
      "toHex",
      "bytesToBigInt",
      "bytesToBool",
      "bytesToNumber",
      "bytesToString",
      "fromBytes",
      "ccipRequest",
      "ccipFetch",
      "offchainLookup",
      "offchainLookupAbiItem",
      "offchainLookupSignature",
      "blobsToCommitments",
      "commitmentToVersionedHash",
      "commitmentsToVersionedHashes",
      "sidecarsToVersionedHashes",
      "blobsToProofs",
      "fromBlobs",
      "toBlobSidecars",
      "toBlobs",
      "defineKzg",
      "setupKzg",
      "concat",
      "concatBytes",
      "concatHex",
      "assertCurrentChain",
      "defineChain",
      "extractChain",
      "getChainContractAddress",
      "encodePacked",
      "withCache",
      "withRetry",
      "withTimeout",
      "formatEther",
      "formatGwei",
      "formatUnits",
      "fromHex",
      "hexToBigInt",
      "hexToBool",
      "hexToNumber",
      "hexToString",
      "fromRlp",
      "checksumAddress",
      "getAddress",
      "getContractError",
      "toEventSelector",
      "getEventSelector",
      "toFunctionSelector",
      "getFunctionSelector",
      "toEventSignature",
      "getEventSignature",
      "toFunctionSignature",
      "getFunctionSignature",
      "toEventHash",
      "toFunctionHash",
      "hashMessage",
      "toPrefixedMessage",
      "isAddress",
      "isAddressEqual",
      "isBytes",
      "isHash",
      "isHex",
      "keccak256",
      "sha256",
      "ripemd160",
      "pad",
      "padBytes",
      "padHex",
      "parseEther",
      "parseGwei",
      "parseTransaction",
      "parseUnits",
      "serializeAccessList",
      "serializeTransaction",
      "size",
      "slice",
      "sliceBytes",
      "sliceHex",
      "stringify",
      "trim",
      "serializeTypedData",
      "validateTypedData",
      "domainSeparator",
      "getTypesForEIP712Domain",
      "createNonceManager",
      "nonceManager",
    ]
  `)
})
