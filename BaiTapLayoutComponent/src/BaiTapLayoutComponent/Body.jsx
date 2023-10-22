import { Banner } from "./Banner";
import { Item } from "./Item";

export const Body = () => {
  return (
    <div>
      <div class="py-5">
        <div class="container px-lg-5">
          <Banner></Banner>
        </div>
      </div>
      <section className="pt-4">
        <div className="container px-lg-5">
          <Item></Item>
        </div>
      </section>
    </div>
  );
};
