import React, { useState } from 'react';
import { View, Heading, TableView, TableHeader, TableBody, Column, Row, Cell, Button, Flex, Link, StatusLight, Avatar, useCollator, useAsyncList } from '@adobe/react-spectrum';

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
  // Create a consistent hash from the name
  const hash = name.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  
  // Use the hash to generate a consistent seed for the avatar
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

function ProjectsPage() {
  const collator = useCollator({ numeric: true });
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const [projects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', owner: uniqueOwners[0], startDate: '2024-04-01', endDate: '2024-06-30' },
    { id: 2, name: 'Mobile App Development', status: 'Planning', owner: uniqueOwners[1], startDate: '2024-05-15', endDate: '2024-08-15' },
    { id: 3, name: 'Marketing Campaign', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-03-01', endDate: '2024-03-31' },
    { id: 4, name: 'Product Launch', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-04-15', endDate: '2024-07-15' },
    { id: 5, name: 'Content Strategy', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-05-01', endDate: '2024-07-31' },
    { id: 6, name: 'E-commerce Platform', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-04-10', endDate: '2024-07-10' },
    { id: 7, name: 'Social Media Integration', status: 'Planning', owner: uniqueOwners[6], startDate: '2024-05-20', endDate: '2024-08-20' },
    { id: 8, name: 'Data Analytics Dashboard', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-04-05', endDate: '2024-07-05' },
    { id: 9, name: 'Customer Support Portal', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-02-15', endDate: '2024-03-15' },
    { id: 10, name: 'Inventory Management System', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-04-20', endDate: '2024-07-20' },
    { id: 11, name: 'HR Management Platform', status: 'Planning', owner: uniqueOwners[0], startDate: '2024-06-01', endDate: '2024-09-01' },
    { id: 12, name: 'Financial Reporting Tool', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-04-25', endDate: '2024-07-25' },
    { id: 13, name: 'Project Management Dashboard', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-02-20', endDate: '2024-03-20' },
    { id: 14, name: 'Document Management System', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-04-30', endDate: '2024-07-30' },
    { id: 15, name: 'Customer Relationship Management', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-06-05', endDate: '2024-09-05' },
    { id: 16, name: 'Supply Chain Optimization', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-05-05', endDate: '2024-08-05' },
    { id: 17, name: 'Quality Assurance Framework', status: 'Completed', owner: uniqueOwners[6], startDate: '2024-03-10', endDate: '2024-04-10' },
    { id: 18, name: 'Security Enhancement Project', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-05-10', endDate: '2024-08-10' },
    { id: 19, name: 'Performance Optimization', status: 'Planning', owner: uniqueOwners[8], startDate: '2024-06-10', endDate: '2024-09-10' },
    { id: 20, name: 'User Experience Redesign', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-05-15', endDate: '2024-08-15' },
    { id: 21, name: 'API Integration Project', status: 'Completed', owner: uniqueOwners[0], startDate: '2024-03-15', endDate: '2024-04-15' },
    { id: 22, name: 'Cloud Migration Initiative', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-05-20', endDate: '2024-08-20' },
    { id: 23, name: 'Database Optimization', status: 'Planning', owner: uniqueOwners[2], startDate: '2024-06-15', endDate: '2024-09-15' },
    { id: 24, name: 'Mobile Responsive Design', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-05-25', endDate: '2024-08-25' },
    { id: 25, name: 'Content Management System', status: 'Completed', owner: uniqueOwners[4], startDate: '2024-03-20', endDate: '2024-04-20' },
    { id: 26, name: 'Business Intelligence Platform', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-05-30', endDate: '2024-08-30' },
    { id: 27, name: 'Workflow Automation', status: 'Planning', owner: uniqueOwners[6], startDate: '2024-06-20', endDate: '2024-09-20' },
    { id: 28, name: 'Customer Feedback System', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-06-01', endDate: '2024-09-01' },
    { id: 29, name: 'Resource Allocation Tool', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-03-25', endDate: '2024-04-25' },
    { id: 30, name: 'Compliance Management System', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-06-05', endDate: '2024-09-05' },
    { id: 31, name: 'Training Platform Development', status: 'Planning', owner: uniqueOwners[0], startDate: '2024-06-25', endDate: '2024-09-25' },
    { id: 32, name: 'Analytics Dashboard Redesign', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-06-10', endDate: '2024-09-10' },
    { id: 33, name: 'Customer Portal Enhancement', status: 'Completed', owner: uniqueOwners[2], startDate: '2024-03-30', endDate: '2024-04-30' },
    { id: 34, name: 'Inventory Tracking System', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-06-15', endDate: '2024-09-15' },
    { id: 35, name: 'Employee Onboarding Platform', status: 'Planning', owner: uniqueOwners[4], startDate: '2024-06-30', endDate: '2024-09-30' },
    { id: 36, name: 'Financial Planning Tool', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-06-20', endDate: '2024-09-20' },
    { id: 37, name: 'Project Portfolio Management', status: 'Completed', owner: uniqueOwners[6], startDate: '2024-04-05', endDate: '2024-05-05' },
    { id: 38, name: 'Vendor Management System', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-06-25', endDate: '2024-09-25' },
    { id: 39, name: 'Risk Assessment Framework', status: 'Planning', owner: uniqueOwners[8], startDate: '2024-07-01', endDate: '2024-10-01' },
    { id: 40, name: 'Performance Monitoring System', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-06-30', endDate: '2024-09-30' },
    { id: 41, name: 'Customer Service Platform', status: 'Completed', owner: uniqueOwners[0], startDate: '2024-04-10', endDate: '2024-05-10' },
    { id: 42, name: 'Sales Analytics Dashboard', status: 'In Progress', owner: uniqueOwners[1], startDate: '2024-07-05', endDate: '2024-10-05' },
    { id: 43, name: 'Marketing Automation System', status: 'Planning', owner: uniqueOwners[2], startDate: '2024-07-10', endDate: '2024-10-10' },
    { id: 44, name: 'Resource Planning Tool', status: 'In Progress', owner: uniqueOwners[3], startDate: '2024-07-15', endDate: '2024-10-15' },
    { id: 45, name: 'Quality Control System', status: 'Completed', owner: uniqueOwners[4], startDate: '2024-04-15', endDate: '2024-05-15' },
    { id: 46, name: 'Compliance Tracking Platform', status: 'In Progress', owner: uniqueOwners[5], startDate: '2024-07-20', endDate: '2024-10-20' },
    { id: 47, name: 'Training Management System', status: 'Planning', owner: uniqueOwners[6], startDate: '2024-07-25', endDate: '2024-10-25' },
    { id: 48, name: 'Customer Success Platform', status: 'In Progress', owner: uniqueOwners[7], startDate: '2024-07-30', endDate: '2024-10-30' },
    { id: 49, name: 'Business Process Automation', status: 'Completed', owner: uniqueOwners[8], startDate: '2024-04-20', endDate: '2024-05-20' },
    { id: 50, name: 'Data Visualization Dashboard', status: 'In Progress', owner: uniqueOwners[9], startDate: '2024-08-01', endDate: '2024-11-01' }
  ]);

  const list = useAsyncList({
    async load() {
      return { items: projects };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          const first = a[sortDescriptor.column];
          const second = b[sortDescriptor.column];
          
          // Handle undefined or null values
          if (first == null && second == null) return 0;
          if (first == null) return sortDescriptor.direction === 'ascending' ? -1 : 1;
          if (second == null) return sortDescriptor.direction === 'ascending' ? 1 : -1;
          
          // Handle date comparisons
          if (sortDescriptor.column === 'startDate' || sortDescriptor.column === 'endDate') {
            const dateA = new Date(first);
            const dateB = new Date(second);
            return sortDescriptor.direction === 'ascending' 
              ? dateA - dateB
              : dateB - dateA;
          }
          
          // Use collator for string comparisons
          const comparison = collator.compare(first, second);
          return sortDescriptor.direction === 'ascending' ? comparison : -comparison;
        })
      };
    }
  });

  return (
    <View>
      <Flex direction="column" gap="size-200">
        <Heading level={1}>Projects</Heading>
        <Button 
          variant="accent" 
          size="M"
          onPress={() => {}}
          UNSAFE_style={{ alignSelf: 'flex-end' }}
        >
          Create project
        </Button>
        <TableView
          aria-label="Projects table"
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
          </TableHeader>
          <TableBody items={list.items}>
            {(item) => (
              <Row>
                <Cell>
                  <Link
                    onPress={() => {
                      alert(`${item.name} has been clicked`);
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
              </Row>
            )}
          </TableBody>
        </TableView>
      </Flex>
    </View>
  );
}

export default ProjectsPage; 