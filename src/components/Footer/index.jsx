import { PiChefHatFill } from "react-icons/pi";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="grid grid-cols-12 py-11">
          <div className="col-span-6 ms-16 flex flex-col justify-between">
            <div>
              <div className="font-semibold text-lg py-2">About Us</div>
              <div className="pb-4 text-lg text-gray-200">
                Welcome to our website, a wonderful place to explore and learn
                how to cook like a pro.
              </div>
              <input
                type="text"
                className="text-black bg-white px-3 py-2.5 w-3/5 rounded-md me-5"
                placeholder="Enter your email"
              />
              <button className="text-white bg-pink-500 py-2.5 px-4 rounded-md">
                Send
              </button>
            </div>
            <div>
              <div className="flex items-center space-x-3">
                <PiChefHatFill className="w-14 h-14" />
                <span className="font-bold text-2xl">Chefify</span>
                <span className="text-sm text-gray-200">2023 Chefify Company</span>
                <span className="text-sm text-gray-200">Terms of Service | Privacy Policy</span>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-semibold text-lg py-2">Learn More</div>
              <div className="pb-2 text-base text-gray-200">Our Cooks</div>
              <div className="pb-2 text-base text-gray-200">
                See Our Features
              </div>
              <div className="pb-2 text-base text-gray-200">FAQ</div>
            </div>
            <div>
              <div className="font-semibold text-lg py-2">Shop</div>
              <div className="pb-2 text-base text-gray-200">
                Gift Subscription
              </div>
              <div className="pb-2 text-base text-gray-200">
                Send Us Feedback
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="font-semibold text-lg py-2">Recipes</div>
            <div className="pb-2 text-base text-gray-200">
              What to Cook this Week
            </div>
            <div className="pb-2 text-base text-gray-200">Pasta</div>
            <div className="pb-2 text-base text-gray-200">Dinner</div>
            <div className="pb-2 text-base text-gray-200">Healthy</div>{" "}
            <div className="pb-2 text-base text-gray-200">Vegetarian</div>
            <div className="pb-2 text-base text-gray-200">Vegan</div>
            <div className="pb-2 text-base text-gray-200">Christmas</div>
          </div>
        </div>
      </div>
    </>
  );
}
