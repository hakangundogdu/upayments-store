import Nav from './Nav';

const Layout = (props: any) => {
  return (
    <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-8">
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
