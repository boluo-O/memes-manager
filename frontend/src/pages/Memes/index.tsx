import { trpc } from '../../api/TrpcApiProvider'

const Memes = () => {
    const test = trpc.memes.test.useQuery()
    console.log('test', test.data)

    return (
        <div>
            <form
                action="http://localhost:5678/upload/image"
                encType="multipart/form-data"
                id="uploadForm"
                method="post"
                // ref="uploadForm"
            >
                <input name="sampleFile" type="file" />
                <input type="submit" value="Upload!" />
            </form>
        </div>
    )
}

export default Memes
