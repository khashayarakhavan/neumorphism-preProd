import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/atomic/collection-item/collection-item.component";
import {
  selectCollection,
  selectIsCollectionFetching
} from "../../redux/shop/shop.selectors";
import {
  CollectionItemsContainer, CollectionPageContainer,
  CollectionTitle
} from "./collection.styles";

export const CollectionPage = ({ collection, isFetching }) => {
  // items is an array so we can `.map` over it.
  // big arrays are better to be changed to hash tables or JS objects for performance optimization.
  const title = "hello";
  const items = [];
  if (isFetching) {
  const { title, items } = collection;
  console.log('i am fetching');
} else {
  console.log("i am not fetching");
}
  
  return (
    <div>
    {isFetching ? <p>loading content for you</p> : 
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
    }
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // Pay attention:
  // here we can also change this to an object in the DB and then change it to array using `object.key()` method.
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  isFetching: selectCollection(selectIsCollectionFetching)(state),
});

export default connect(mapStateToProps)(CollectionPage);
