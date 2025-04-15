import { Card, CardContent } from "@/components/ui/card";

const DashbaordCard = ({ title, icon, count }) => {
  return (
    <Card className="bg-slate-100 h-25 w-fit dark:bg-slate-800 p-4 pb-0">
      <CardContent>
        <h3 className="text-xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
          {title}
        </h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashbaordCard;
