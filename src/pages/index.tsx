import PageLayout from '@/layout/page-layout';
import CarList from "@/components/CarList";

export default function Home() {
  return (
    <PageLayout className={"w-full bg-white"}>    
      <section className={"w-full bg-blue-light pt-3xl pb-7xl"}>
        <div className={"container mx-auto px-4"}>
          <h3 className={"text-black-site text-30 font-semibold"}>Car List</h3>
        </div>
      </section>
      <section className={"w-full mt-[-30px]"}>
        <CarList />
      </section>
    </PageLayout>
  )
}
