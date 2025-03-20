const BookLayout = ({ children }) => {
  return (
    <div className="layout-container w-full">
      <main>{children}</main>
    </div>
  );
};

export default BookLayout;
