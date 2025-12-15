import GlassSurface from "./GlassSurface";

const Navbar = () => {

  return (
    <div className="fixed w-screen z-99">
      <GlassSurface 
        borderRadius={24}
        width={"full"}
      >
        <div className="w-screen flex flex-row justify-between m-10">
          <div>
            DANAD
          </div>
          <div className="w-1/2 flex flex-row">
            <ul className="w-full flex flex-row justify-between">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>REGISTER</li>
            </ul>
          </div>
        </div>
      </GlassSurface>
    </div>
  );
};

export default Navbar;
