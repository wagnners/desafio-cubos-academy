import React from 'react';

const SearchInput = ({handleChangeInput, handleKeyDown, name, state}) => {
  return (
    <div className="form-group">
        <input 
            className="input-search"
            placeholder="Busque um filme por nome, ano ou gênero" 
            name={name}
            value={state[name]}
            onChange={handleChangeInput}
            onKeyDown={handleKeyDown}
        />
    </div>
  );
};

export default SearchInput;