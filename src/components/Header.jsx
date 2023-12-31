const Header = () => {
  return (
    <>
        <div className="absolute  w-screen px-8 py- bg-gradient-to-b from-white z-10 flex justify-between">
            <img className="w-44"
            src="https://www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png" 
            alt="Netflix logo" />  
        </div>

        <div className=" flex ml-[92%] py-6 mt-2">
          <img className="justify-between z-10 mr-4" src="https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />

          <button className="font-bold z-10 px-3 bg-yellow-500 border rounded-lg border-yellow-600 hover:bg-yellow-700 m">Sign Out</button>
        </div>

    </>
  )
}

export default Header;