import Image from 'next/image'

export default function Item(props) {
    const {name, onFormChange} = props;
return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full shadow-lg">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <Image className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 p-1" src="/produce.jpeg" alt="produce" width="80" height="80" />
            <div className="flex-grow p-1">
                <h2 className="text-gray-900 title-font font-medium">{name}</h2>
            </div>
            <div className="flex-grow p-1">
                <input onChange={onFormChange} className="w-32 font-extrabold" placeholder ="0" type="number" id="count" name={name} min="0" step="1" /> 
            </div>
        </div>      
    </div>
);
};