import React from "react";
import { DescriptionList, DescriptionListItem, Text } from "@hubspot/ui-extensions";
import { ProductSpecs } from "../types/product";

interface ProductSpecsTabProps {
  specs: ProductSpecs;
}

// Replace underscores with spaces and capitalize the first letter of each word
const formatDescription = (description: string) => {
  return description.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const ProductSpecsTab = ({ specs }: ProductSpecsTabProps) => {
  return (
    <DescriptionList direction="row">
      {Object.entries(specs).map(([key, value]) => (
        <DescriptionListItem label={formatDescription(key)}>
          {Array.isArray(value) ? (
            <Text>{value.join(', ')}</Text>
          ) : (
            <Text>{value}</Text>
          )}
        </DescriptionListItem>
      ))}
    </DescriptionList>
  );
};

export default ProductSpecsTab;
