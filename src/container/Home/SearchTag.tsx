import { Flex } from "../../components/Elements"
import Tag from "../../components/Tag/Tag"

const popularTags = ["Dog", "Cat", "Space", "Nature", "Business", "Office", "Coffee", "World"]

const SearchTag = ({onTagClick}:{onTagClick:(tag:string) => void}) => {
    return (
        <Flex className="searchTag" marginTop={20} alignItems="center" gap={20} data-test-id='searchTag'>
            <div className="searchTag__label" data-test-id="label">Search by tags:</div>
            <Flex gap={30} data-test-id="tags" flex={1} overflow="auto">
                {popularTags.map(tag => <Tag key={tag} label={tag} onClick={() => onTagClick(tag)} />)}
            </Flex>
        </Flex>
    )


}


export default SearchTag