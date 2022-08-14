import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { Item, Row, Table } from '../../admin-components/table/Table';
import {
	useEditCategoryAsAdminMutation,
	useGetAllCategoriesAsAdminQuery,
} from '../../store/services/adminService';
import { Modal } from 'semantic-ui-react';
import AdminModalBody from '../../admin-components/table/AdminModalBody';
import AddImageSingle from '../../components/listing/addimage/AddImageSingle';

const Admincategories = () => {
	const [page, setPage] = useState(1);
	const [open, setOpen] = useState();
	const [selected, setSelected] = useState({});

	const { data, isError, error, isFetching, isLoading } =
		useGetAllCategoriesAsAdminQuery({ page });
	return (
		<>
			<AdminPage selected='Categories'>
				<ListPage
					isError={isError}
					error={error}
					title='Categories'
					button='Add Category'
					href={`/add-category`}>
					<Table
						title='All Users'
						isLoading={isFetching}
						page={data?.page ? data.page : 1}
						totalPages={data?.totalPages ? data.totalPages : 1}
						setPage={e => setPage(e)}>
						<Row title>
							<Item title>Name</Item>
							<Item title>Image</Item>
							<Item title>...</Item>
						</Row>
						{!isLoading &&
							data?.doc &&
							data.doc.map((item, i) => (
								<Row key={i} i={i}>
									<Item>{item?.name && item.name}</Item>
									<Item>
										<Item image={item?.image && item.image} />
									</Item>
									<Item>
										<Button
											size='mini'
											onClick={() => {
												setSelected(item);
												setOpen(true);
											}}>
											{'Edit'}
										</Button>
									</Item>
								</Row>
							))}
					</Table>
				</ListPage>
			</AdminPage>
			<EditCategory open={open} setOpen={e => setOpen(e)} item={selected} />
		</>
	);
};

function EditCategory({ open, setOpen, item }) {
	const [value, setValue] = useState(item?.name ? item.name : '');
	const [edit, result] = useEditCategoryAsAdminMutation();
	const [image, setImage] = useState();

	useEffect(() => {
		setValue(item?.name ? item.name : '');
		setImage(item?.image ? item.image : '/test/image.png');
	}, [item]);
	return (
		<>
			<Modal
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
				open={open}>
				<Modal.Header>Edit Category</Modal.Header>

				<Modal.Content>
					<AdminModalBody>
						<AddImageSingle image={image} setImage={e => setImage(e)} />
						<Input
							size='small'
							placeholder={item?.name && item.name}
							value={value}
							onChange={e => setValue(e.target.value)}
						/>
					</AdminModalBody>
				</Modal.Content>
				<Modal.Actions>
					<Button basic color='red' onClick={() => setOpen(false)}>
						<Icon name='remove' /> Cancel
					</Button>
					<Button
						color='green'
						inverted
						loading={result.isLoading}
						onClick={() => {
							edit({ name: value, id: item?._id && item._id, image: image });
							setOpen(false);
						}}>
						<Icon name='checkmark' /> Update
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
}

export default Admincategories;
