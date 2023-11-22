// Importing functions from category files
import * as caseManipulation from "./lib/caseManipulation";
import * as whitespaceHandling from "./lib/whitespaceHandling";
import * as DateAndTimeFormatting from "./lib/DateAndTimeFormatting";
import * as maskingAndSecurity from "./lib/maskingAndSecurity";
import * as dataExtractionAndAnalysis from "./lib/dataExtractionAndAnalysis";
import * as specializedStringOperations from "./lib/specializedStringOperations";
import * as stringAnalysisAndValidation from "./lib/stringAnalysisAndValidation";
import * as textTransformationsAndUtilities from "./lib/textTransformationsAndUtilities";

// Combining all functions into a single object
const _s = {
  ...caseManipulation,
  ...whitespaceHandling,
  ...maskingAndSecurity,
  ...dataExtractionAndAnalysis,
  ...specializedStringOperations,
  ...stringAnalysisAndValidation,
  ...textTransformationsAndUtilities,
};

// Exporting individual functions and the _s object
export * from "./lib/caseManipulation";
export * from "./lib/whitespaceHandling";
export * from "./lib/maskingAndSecurity";
export * from "./lib/dataExtractionAndAnalysis";
export * from "./lib/specializedStringOperations";
export * from "./lib/StringAnalysisAndValidation";
export * from "./lib/textTransformationsAndUtilities";
export { _s };
