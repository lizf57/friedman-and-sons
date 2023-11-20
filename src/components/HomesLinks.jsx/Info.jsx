import { Tabs, Tab, TabList, TabPanels, TabPanel, TabIndicator, Divider } from '@chakra-ui/react'


const info = () => {

  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList color={'lightBrown'}>
          <Tab>Materials</Tab>
          <Tab>Flooring</Tab>
          <Tab>Contractors</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          borderRadius="1px"
        />
        <Divider borderColor={'lightBrown'} />
        <TabPanels color={'lightBrown'}>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda molestias ex autem quasi, ea doloribus nostrum adipisci nulla, quos laborum temporibus quaerat error saepe. Aspernatur aut itaque laborum delectus.!</p>
          </TabPanel>
          <TabPanel>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, facere. Voluptatum mollitia magni excepturi nihil. In beatae ipsa repellat. Dignissimos veniam fugit reiciendis voluptatem provident velit dolores quisquam autem cum.</p>
          </TabPanel>
          <TabPanel>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit saepe laborum molestiae iusto dignissimos voluptatem adipisci quaerat omnis nam ex laudantium nemo voluptas numquam, harum rerum veniam, aspernatur perspiciatis fuga.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default info