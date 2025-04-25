import React, { useState } from 'react';
import { View, Heading, TableView, TableHeader, TableBody, Column, Row, Cell, Button, Flex, Link, StatusLight, Avatar, useCollator, useAsyncList } from '@adobe/react-spectrum';
import { useNavigate } from 'react-router-dom';

const uniqueOwners = [
  'Sarah Johnson',
  'Michael Chen',
  'Emily Rodriguez',
  'David Kim',
  'Lisa Patel',
  'James Wilson',
  'Maria Garcia',
  'Robert Taylor',
  'Jennifer Lee',
  'Thomas Brown'
];

function getAvatarUrl(name) {
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${hash}`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function PortfoliosPage() {
  const collator = useCollator({ numeric: true });
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const navigate = useNavigate();
  const [portfolios] = useState([
    { id: 1, name: 'Digital Transformation', status: 'Active', owner: uniqueOwners[0], startDate: '2024-01-01', endDate: '2024-12-31', projectCount: 12 },
    { id: 2, name: 'Customer Experience', status: 'Active', owner: uniqueOwners[1], startDate: '2024-02-01', endDate: '2024-12-31', projectCount: 8 },
    { id: 3, name: 'Infrastructure Modernization', status: 'On Hold', owner: uniqueOwners[2], startDate: '2024-03-01', endDate: '2024-11-30', projectCount: 6 },
    { id: 4, name: 'Product Innovation', status: 'Active', owner: uniqueOwners[3], startDate: '2024-01-15', endDate: '2024-12-15', projectCount: 15 },
    { id: 5, name: 'Operational Excellence', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-04-01', endDate: '2024-12-31', projectCount: 10 },
    { id: 6, name: 'Market Expansion', status: 'Active', owner: uniqueOwners[5], startDate: '2024-02-15', endDate: '2024-10-31', projectCount: 7 },
    { id: 7, name: 'Research & Development', status: 'Active', owner: uniqueOwners[6], startDate: '2024-01-01', endDate: '2024-12-31', projectCount: 9 },
    { id: 8, name: 'Sustainability Initiatives', status: 'Planning', owner: uniqueOwners[7], startDate: '2024-05-01', endDate: '2024-12-31', projectCount: 5 },
    { id: 9, name: 'Technology Innovation', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-01-01', endDate: '2024-03-31', projectCount: 11 },
    { id: 10, name: 'Business Analytics', status: 'Active', owner: uniqueOwners[9], startDate: '2024-03-15', endDate: '2024-12-15', projectCount: 13 }
  ]);

  const list = useAsyncList({
    async load() {
      return {
        items: portfolios.sort((a, b) => collator.compare(a.name, b.name))
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];
          
          if (first == null && second == null) return 0;
          if (first == null) return sortDescriptor.direction === 'ascending' ? -1 : 1;
          if (second == null) return sortDescriptor.direction === 'ascending' ? 1 : -1;
          
          if (sortDescriptor.column === 'startDate' || sortDescriptor.column === 'endDate') {
            const dateA = new Date(first);
            const dateB = new Date(second);
            return sortDescriptor.direction === 'ascending' 
              ? dateA - dateB
              : dateB - dateA;
          }
          
          if (sortDescriptor.column === 'projectCount') {
            return sortDescriptor.direction === 'ascending'
              ? first - second
              : second - first;
          }
          
          const comparison = collator.compare(first, second);
          return sortDescriptor.direction === 'ascending' ? comparison : -comparison;
        })
      };
    },
    initialSortDescriptor: {
      column: 'name',
      direction: 'ascending'
    }
  });

  return (
    <View>
      <Flex direction="row" justifyContent="space-between" alignItems="center" marginBottom="size-200" height="size-400">
        <Heading level={1}>Portfolios</Heading>
        <Button 
          variant="accent" 
          size="M"
          onPress={() => {}}
        >
          Create portfolio
        </Button>
      </Flex>
      <TableView
        aria-label="Portfolios table"
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        height={700}
        overflowMode="nowrap"
        sortDescriptor={list.sortDescriptor}
        onSortChange={list.sort}
      >
        <TableHeader>
          <Column key="name" allowsSorting>Name</Column>
          <Column key="status" allowsSorting>Status</Column>
          <Column key="owner" allowsSorting>Owner</Column>
          <Column key="startDate" allowsSorting>Start Date</Column>
          <Column key="endDate" allowsSorting>End Date</Column>
          <Column key="projectCount" allowsSorting>Projects</Column>
        </TableHeader>
        <TableBody items={list.items}>
          {(item) => (
            <Row>
              <Cell>
                <Link
                  onPress={() => {
                    const portfolioSlug = item.name
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    navigate(`/portfolio/${portfolioSlug}/details`);
                  }}
                >
                  {item.name}
                </Link>
              </Cell>
              <Cell>
                <StatusLight 
                  variant={
                    item.status === 'Completed' ? 'positive' :
                    item.status === 'Planning' ? 'notice' :
                    item.status === 'On Hold' ? 'negative' :
                    'info'
                  }
                >
                  {item.status}
                </StatusLight>
              </Cell>
              <Cell>
                <Flex gap="size-100" alignItems="center">
                  <Avatar 
                    src={getAvatarUrl(item.owner)}
                    alt={`${item.owner}'s avatar`}
                    size="avatar-size-100"
                  />
                  <span>{item.owner}</span>
                </Flex>
              </Cell>
              <Cell>{formatDate(item.startDate)}</Cell>
              <Cell>{formatDate(item.endDate)}</Cell>
              <Cell>{item.projectCount}</Cell>
            </Row>
          )}
        </TableBody>
      </TableView>
    </View>
  );
}

export default PortfoliosPage; 