function Body() {
  return (
    <div className="space-y-4 lg:flex ">
      <div className="flex items-center justify-center lg:flex:1 order-2 lg:justify-end">
        <img
          src="src/assets/Blue-Shape.svg"
          alt="blue-shape"
          className="-rotate-[45deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="src/assets/Pink-Shape.svg"
          alt="pink-shape"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="src/assets/Purple-Shape.svg"
          alt="blue-shape"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]"
        />
        <img
          src="src/assets/Hero-Model.png"
          alt="Hero-Model"
          className="absolute h-64 md:h-72 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold leading-tight">
          Host your website in less than 5 minute
        </h1>
        <p className="text-gray-400">
          With hoster, get yout website up and running in no less than 5 minutes
          with the most competetive pricing packages{' '}
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder: text-gray-400"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2">
          <img src="src/assets/Checkmark.svg" alt="" />
          <p className="text-gray-400">No spam ,ever .Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
