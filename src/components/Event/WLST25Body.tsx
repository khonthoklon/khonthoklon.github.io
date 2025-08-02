import {
  RegisterButton,
  WorkshopInfo,
  WorkshopTakeaways,
  WorkshopSchedule,
  RegistrationFees,
  PaymentInstructions,
  Committees,
} from "./WLST25";

const WLST25Body = () => {
  return (
    <div className="relative">
      <RegisterButton />

      <div className="mt-16 space-y-8 rounded-lg border p-8 shadow-sm bg-white">
        <h2 className="text-3xl font-bold text-gray-800">
          Workshop on Low-Resource Speech Technology (WLST25)
        </h2>

        <WorkshopInfo />
        <WorkshopTakeaways />
        <WorkshopSchedule />
        <RegistrationFees />
        <PaymentInstructions />
        <Committees />
      </div>
    </div>
  );
};

export default WLST25Body;
