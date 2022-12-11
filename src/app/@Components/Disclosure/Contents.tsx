import { RamenCity } from '../../../@types/models/City'

const Contents = ({ contents }) => {
    return (
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-3">
                {contents.map(content => {
                    return (
                        <button key={content.name}>
                            <div className="bg-gray-200 rounded-md m-2 p-2 hover:bg-gray-300">{content.name}</div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
export default Contents