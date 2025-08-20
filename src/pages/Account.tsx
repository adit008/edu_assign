import { Card } from "../components/ui/Card";

export const Account = () => {
  return (
    <div className=" flex flex-col gap-[18px] text-neutral-600">
      <div className="tracking-tight font-semibold text-[20px] px-[18px] py-[24px] shadow bg-white">
        Account Settings
      </div>

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfeO52olh7y7C0q00TYK22OfojrZuzcCL7-A&s"
        name="Marry Doe"
        email="marry@gmail.com"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};
