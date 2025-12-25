import React from "react"

interface child {
    title: string
    children?: React.ReactNode
    textCard: string
}

export function Card({title, textCard, children} : child) {
    return (
        <>
            <div className="card">
                {children}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{textCard}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}