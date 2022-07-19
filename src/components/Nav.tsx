const Nav = () => {
  return (
    <header className="  flex justify-between h-16 mx-auto pb-4 border-b-2 border-slate-100">
      <a href="/" className="flex items-center">
        <img
          src="https://upayments.com/en/wp-content/uploads/sites/4/2020/07/upay-logo.png"
          alt="upay-logo"
          className="w-auto h-6"
        />
        <p className="text-xl ml-4 font-bold text-indigo-600">Store</p>
      </a>

      <button className="hover:text-indigo-800  text-slate-600">
        Register{' '}
      </button>
    </header>
  );
};

export default Nav;
