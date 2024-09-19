import React from 'react';

const page = (props: { searchParams: { list: string } }) => {
  console.log(props);
  return (
    <div>
      playlist: {props.searchParams.list}
    </div>
  );
};

export default page;

