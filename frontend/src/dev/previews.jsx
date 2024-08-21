import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {DefaultChooseADeckPage} from "../components/ChooseADeckPage/ChooseADeckPage.stories.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/DefaultChooseADeckPage">
                <DefaultChooseADeckPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews