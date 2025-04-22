import React, { useState } from "react";
import {
  Flex,
  Heading,
  Illustration,
  Select,
  Tabs,
  Tab,
  Text,
  hubspot,
} from "@hubspot/ui-extensions";
import PhotoCarousel from "./components/PhotoCarousel";
import ProductSpecsTab from "./components/ProductSpecsTab";
import DEVICES from "./data/devices.json";
import { ProductState } from "./types/product";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const Extension = ({ context, runServerless, sendAlert }) => {
  const [selectedDevice, setSelectedDevice] = useState<ProductState>(null);

  // Manages the device selection
  const handleDeviceChange = (value: string | number) => {
    const device = DEVICES.find(product => product.name === value);
    if (device) {
      setSelectedDevice(device);
    }
  };

  // Creates a list of devices for the select component
  const devices = DEVICES.map((device) => ({
    label: device.name,
    value: device.name
  }));

  return (
    <Flex direction='column' gap='lg'>
      <Select options={devices} onChange={handleDeviceChange} label='Devices' placeholder='Select a device' />

      {/* If no device is selected, show the empty state */}
      {!selectedDevice && (
        <Flex justify='center' align='center' direction='column' gap='sm'>
          <Illustration name="emptyStateCharts"
            alt="Magnifying glass icon indicating no device selected"
            width={300}
            height={300} />
          <Text format={{ fontWeight: 'bold' }}>Select a device to get started</Text>
        </Flex>
      )}

      {/* Show device details when a device is selected */}
      {selectedDevice && (
        <>
          <PhotoCarousel
            productName={selectedDevice.name}
            productImages={selectedDevice.images}
          />

          <Flex direction='column' gap='xs'>

            <Heading>{selectedDevice.name} Specs</Heading>

            <Tabs defaultSelected="first">
              <Tab tabId="first" title="Physical">
                <ProductSpecsTab specs={selectedDevice.visual_specs} />
              </Tab>
              <Tab tabId="second" title="Hardware">
                <ProductSpecsTab specs={selectedDevice.hardware_specs} />
              </Tab>
              <Tab tabId="third" title="Software">
                <ProductSpecsTab specs={selectedDevice.software_specs} />
              </Tab>
              <Tab tabId="fourth" title="Camera">
                <ProductSpecsTab specs={selectedDevice.camera_specs} />
              </Tab>
            </Tabs>
          </Flex>
        </>
      )}
    </Flex>
  );
};
