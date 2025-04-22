# Tabbed Product Carousel

A HubSpot UI Extensions app card that displays product information in a tabbed interface with an image carousel, allowing users to browse through device specifications and photos.

## Overview

This [private app card](https://developers.hubspot.com/docs/guides/crm/private-apps/creating-private-apps) built with UI Extensions combines a dynamic photo carousel with a tabbed interface that displays device information in list format.


### Project Structure

The main extension logic lives in `src/app/extensions/ProductRecord.tsx`, which is the entry point and container component. The UI is broken down into components stored in the `components` directory, including:

- `PhotoCarousel` for dynamic photo carousel
- `ProductSpecsTabs` for the description lists containing device specs and information

## Installing the App Card

### Requirements

There are a few things that must be set up before you can make use of this project.

* You must have an active HubSpot account.
* You must have the [HubSpot CLI](https://www.npmjs.com/package/@hubspot/cli) installed and set up.
* You must have access to developer projects (developer projects are currently [in public beta under "CRM Development Tools"](https://app.hubspot.com/l/whats-new/betas)).


### Running the HubSpot Private App Locally


1. Initialize the project to generate the `hubspot.config.yml` file which contains the account information needed to run the project. Follow the prompts, select your developer account, and generate a personal access key.
```
hs init
```

2. Upload the project to your HubSpot account.

```
hs project upload
```

3. Navigate to the app card extensions directory (`src/app/extensions`) and install the dependencies.

```
npm install
```

4. Start the server for local development.

```
hs project dev
```

### Note

When making changes to configuration files ({CARD\_NAME}-card.json and app.json), be sure to stop the development server and use `hs project upload` to update the project before restarting the development server.

### Viewing the App Card

This card is configured to be viewed on Ticket records. To view the card for development, navigate to any Ticket record and select `Customize record`. Select the view you'd like to update from the table and choose `Add cards`.

<img width="1453" alt="Screenshot 2025-02-20 at 11 17 13 AM" src="https://github.com/user-attachments/assets/039b54a1-6b76-41ea-a452-cc3585c6f1ae" />

### Using the Product Carousel Card
This app card allows you to select one of five devices from a drop-down list. When a device is selected, you can browse through a carousel of images and view data about it, separated into tabs.





## Learn More About App Cards Powered by UI Extensions

To learn more about building public app cards, visit the [HubSpot app cards landing page](https://developers.hubspot.com/build-app-cards) and check out the [HubSpot private app cards developer documentation](https://developers.hubspot.com/docs/guides/crm/private-apps/quickstart).
