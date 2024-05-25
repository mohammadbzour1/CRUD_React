import React from 'react'

export default function Input({id,title,type,name,additionClass,changeData,errors,value}) {
    return (

        <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} value={value} name={name} className={`form-control ${additionClass}`} id={id} onChange={changeData} />
            {errors[name]&&<p className='text-danger'>{errors[name]}</p>}
        </div>

    )
}
