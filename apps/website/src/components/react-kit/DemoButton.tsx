
'use client';
import React from 'react';
import { Button, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoButton = () => {
  return (
    <>
      <ComponentWrapper>
        <Flex
          direction={'row'}
          align={'start'}
          justify={'start'}
          gap={'xs'}
          wrap={'wrap'}
          style={{ marginBottom: '20px', marginTop: '20px' }}>
          <Button
            size='xs'
            variant='slate'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='xs'
            variant='jade'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='xs'
            variant='hyper'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='xs'
            variant='neon'
            href={'/components'}
            target='_self'>
            View components
          </Button>
        </Flex>

        {/* <!-- Small --> */}
        <Flex
          direction={'row'}
          align={'start'}
          justify={'start'}
          gap={'xs'}
          wrap={'wrap'}
          style={{ marginBottom: '20px' }}>
          <Button
            size='sm'
            variant='slate'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='sm'
            variant='jade'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='sm'
            variant='hyper'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='sm'
            variant='neon'
            href={'/components'}
            target='_self'>
            View components
          </Button>
        </Flex>

        {/* <!-- Medium --> */}
        <Flex
          direction={'row'}
          align={'start'}
          justify={'start'}
          gap={'xs'}
          wrap={'wrap'}
          style={{ marginBottom: '20px' }}>
          <Button
            size='md'
            variant='slate'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='md'
            variant='jade'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='md'
            variant='hyper'
            href={'/components'}
            target='_self'>
            View components
          </Button>
          <Button
            size='md'
            variant='neon'
            href={'/components'}
            target='_self'>
            View components
          </Button>
        </Flex>
      </ComponentWrapper>
    </>
  );
};


