import React from 'react';
import Filter from './Filters';

function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <div className="todo-footer clearfix">
      <div className='pull_left'>
        <strong>
        <span className="count-todos">{count}</span>
      {' items left'}
        </strong>
      </div>
      <div className='pull_right'>
        <Filter filter={filter} change={changeFilter}/>
      </div>
    </div>
  );
}

export default Footer;