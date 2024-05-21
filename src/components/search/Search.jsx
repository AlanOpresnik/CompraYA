import React from 'react'

const Search = () => {
    return (
        <div className="relative w-full mt-1 max-w-lg mx-auto">
            <input
                type="search"
                className="w-full py-2 px-3 pr-10 border text-md border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-500"
                placeholder="Buscar productos, marcas y más..."
            />
            <button className="absolute  border-l pl-3 top-1/2  right-2 transform -translate-y-1/2">
                <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 52.966 52.966"
                    xmlSpace="preserve"
                >
                    <path
                        d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
              c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
              C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
              S32.459,40,21.983,40z"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Search