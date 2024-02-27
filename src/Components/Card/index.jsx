function Card(data) {
    return(
    <div className="bg-white cursor-pointer w-56 h-60">
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-1 left-1 rounded-lg bg-white/60 text-sm px-1 py-0.5">{data.data.category.name}</span>
            <img
            src={data.data.images}
            alt={data.data.title}
            className="w-full h-full rounded-lg"
            // Para hacer que la imagen conserve su relación de aspecto se usa la
            // propiedad object-cover
            />
            <div className="absolute top-1 right-1 flex justify-center items-center bg-white/90  text-lg rounded-full w-6 h-6">+</div>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-semibold">{data.data.title}</span>
            <span className="mr-2 text-lg font-bold">${data.data.price}</span>
        </p>
    </div>
    )
}

export { Card };