import React from 'react';
import Filter from './Filters';
import ButtonWrapper from './ButtonWrapper';

function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <footer className="clearfix">
      <div className='pull_left buttons'>
        <ButtonWrapper {...props}/>
      </div>
      <div className='pull_left'>
      {`${count} items left`}
      </div>
      <div className='pull_right'>
        <Filter {...{filter, changeFilter}}/>
      </div>
    </footer>
  );
}

export default Footer;