import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import Small from "../components/Small";
import CategoryFilter from "../components/CategoryFilter";

function RecentActivitySection() {
  return (
    <SectionContainer
      SectionTitle={"Recent Activity"}
      SectionNav={<CategoryFilter />}
    >
      {[...Array(6)].map((_, i) => (
        <Card className="flex items-center justify-between text-white" key={i}>
          <div className="flex gap-4 items-center">
            <div className="text-3xl">🍔</div>
            <div className="flex flex-col">
              <strong>Pret A Manger</strong>
              <Small text="Food • Yesterday" />
            </div>
          </div>

          <div className="flex flex-col justify-between items-center">
            <strong>-£67.80</strong>
            <Small text="9:15am" />
          </div>
        </Card>
      ))}
    </SectionContainer>
  );
}

export default RecentActivitySection;
