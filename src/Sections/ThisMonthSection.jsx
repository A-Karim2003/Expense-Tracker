import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import Date from "../utils/Date";
import Small from "../components/Small";

function ThisMonthSection() {
  return (
    <SectionContainer
      SectionTitle={"This Month"}
      SectionNav={<Date />}
      className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)"
    >
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          £1400.30
        </h3>
        <Small text={"+17.0%"} />
      </Card>
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          €1638.35
        </h3>
        <Small text={"+17.0%"} />
      </Card>
      <Card>
        <h3 className="text-white text-2xl font-bold tracking-[2px] mb-2">
          $1778.38
        </h3>
        <Small text={"+17.0%"} />
      </Card>
    </SectionContainer>
  );
}

export default ThisMonthSection;
