// Importing functions from category files
import * as textCaseManipulation from "./lib/textCaseManipulation";
import * as textCleaning from "./lib/textCleaning";
import * as textFormatting from "./lib/textFormatting";
import * as textMaskingAndSecurity from "./lib/textMaskingAndSecurity";
import * as textMetadataAndExtraction from "./lib/textMetadataAndExtraction";
import * as textSpecializedOperations from "./lib/textSpecializedOperations";
import * as textAnalysisAndValidation from "./lib/textAnalysisAndValidation";
import * as textTransformations from "./lib/textTransformations";
import * as textGeneration from "./lib/textGeneration";

// Combining all functions into a single object
const _s = {
  ...textCaseManipulation,
  ...textCleaning,
  ...textFormatting,
  ...textMaskingAndSecurity,
  ...textMetadataAndExtraction,
  ...textSpecializedOperations,
  ...textAnalysisAndValidation,
  ...textTransformations,
  ...textGeneration,
};

// Exporting individual functions and the _s object
export * from "./lib/textCaseManipulation";
export * from "./lib/textCleaning";
export * from "./lib/textFormatting";
export * from "./lib/textMaskingAndSecurity";
export * from "./lib/textMetadataAndExtraction";
export * from "./lib/textSpecializedOperations";
export * from "./lib/textAnalysisAndValidation";
export * from "./lib/textTransformations";
export * from "./lib/textGeneration";
export { _s };
