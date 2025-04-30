import HTML from '@/components/portfolio/html-css';
import JavaScript from '@/components/portfolio/javascript';
// import PageTitle from '@/components/pageTitle';

export default function Page(){
  return (
    <div className="h-[600vh] relative">
      <h1 className="title mt-[30vh] sticky top-[30px] text-6xl tracking-[5.25px] font-extrabold filter-(--my-shadow) z-[999]" >Portfolio</h1>
      {/* <PageTitle title="Portfolio" /> */}
      <div className="mt-[30vh] flex flex-col items-center justify-between h-fit">
        <div className="relative h-fit">
          <JavaScript />
        </div>
        <div className="relative h-[120vh]">
          <HTML />
        </div>
      </div>
    </div>
  );
}
