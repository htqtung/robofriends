import React from 'react';

const SearchBox = ({ searchWord, setSearchWord }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={searchWord}
        onChange={(e) => setSearchWord(e)}
      />
    </div>
  );
};

export default SearchBox;
