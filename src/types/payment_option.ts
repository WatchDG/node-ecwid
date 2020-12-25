type PaymentOptionInstructionsForCustomer = {
  instructionsTitle: string;
  instructions: string;
};
type PaymentOption = {
  id: string;
  enabled: boolean;
  checkoutTitle: string;
  checkoutDescription: string;
  paymentProcessorId: string;
  paymentProcessorTitle: string;
  orderBy: number;
  appClientId: string;
  instructionsForCustomer: PaymentOptionInstructionsForCustomer;
};
