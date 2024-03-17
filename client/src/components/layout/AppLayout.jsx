import React from 'react'

const AppLayout = ()=>WrappedComponent=>{
    return (props)=>{
        return (
            <div>
                <div>Header</div>
                <WrappedComponent {...props}/>
                <div>footer</div>
            </div>
        )
    }
}
export default AppLayout
