import React from 'react';
const CasterItem = (props) => {
  const { info } = props;
  console.log(info);
  return (
    <div className="caster">
      <img
        src={`${import.meta.env.VITE_API_IMGURL}${info.profile_path}`}
        alt={info.id}
      />
      <p className="caster__name">{info.name}</p>
    </div>
  );
};

export default CasterItem;
