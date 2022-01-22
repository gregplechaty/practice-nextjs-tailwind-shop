import Item from '../Item/Item.js'

export default function Category() {
return (
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Vegetables</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The good stuff. Hopefully fresh.</p>
        </div>
        <div className="flex flex-wrap -m-2">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>
);
};