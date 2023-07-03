
'use client';
import React from 'react';
import { Chip, Flex } from '@atlrdsgn/kit';
import ComponentWrapper from '../core/component.wrapper';

export const DemoChip = () => {
  return (
    <ComponentWrapper>
      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size={'xsmall'}
          variant={'hyper'}
          shape={'pill'}>
          Extra Small Chip
        </Chip>
        <Chip
          size={'xsmall'}
          variant={'slate'}
          shape={'pill'}
          color={'volt5'}>
          Extra Small Chip
        </Chip>
      </Flex>

      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size={'small'}
          variant={'hyper'}
          shape={'pill'}>
          Small Chip
        </Chip>
        <Chip
          size={'small'}
          variant={'slate'}
          shape={'pill'}
          color={'volt5'}>
          Small Chip
        </Chip>
      </Flex>

      <Flex
        direction={'row'}
        align={'start'}
        justify={'start'}
        gap={'xs'}
        wrap={'wrap'}
        style={{ marginBottom: '20px', marginTop: '20px' }}>
        <Chip
          size={'medium'}
          shape={'pill'}>
          Medium Chip
        </Chip>
        <Chip
          size={'medium'}
          variant={'hyper'}
          shape={'pill'}>
          Medium Chip
        </Chip>
      </Flex>
    </ComponentWrapper>
  );
};
