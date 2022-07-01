import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ListPage from '../../admin-components/listpage/ListPage';
import AdminPage from '../../admin-components/page/AdminPage';
import { DetailsTable } from '../../admin-components/table/Details';
import { Table } from '../../admin-components/table/Table';
import AddSingleImage from '../../components/listing/addimage/AddSIngleImage';
import Button from '../../components/util/button/Button';
import Error from '../../components/util/error/Error';
import Input from '../../components/util/input/Input';
import TextArea from '../../components/util/input/TextArea';
import { SectionInput } from '../../components/util/section/Section';
import { useAddCategoryAsAdminMutation } from '../../store/services/adminService';

const AddCategory = () => {
	const router = useRouter();
	const [image, setImage] = useState();
	const [name, setName] = useState();
	const [description, setDescription] = useState();
	const [addCategory, result] = useAddCategoryAsAdminMutation();
	const onSubmit = e => {
		e.preventDefault();
		addCategory({
			name,
			description,
			image,
		});
	};

	useEffect(() => {
		if (result.isSuccess) {
			router.push(`/admin/categories`);
		}
	}, [result.isSuccess]);

	return (
		<AdminPage selected='Categories'>
			<ListPage title='Add New Category'>
				<DetailsTable paginate='no'>
					<SectionInput>
						<form onSubmit={onSubmit}>
							<AddSingleImage
								value={image}
								setImage={e => setImage(e)}
								label='Add Image'
								image={image}
							/>
							<Input
								label='Category Name'
								value={name}
								onChange={e => setName(e)}
								placeholder='Enter Category Name'
								required
							/>
							<TextArea
								label='Category Description'
								value={description}
								onChange={e => setDescription(e)}
								optional
							/>
							<Error isError={result.isError}>{result.error}</Error>
							<Button submit loading={result.isLoading}>
								Add Category
							</Button>
						</form>
					</SectionInput>
				</DetailsTable>
			</ListPage>
		</AdminPage>
	);
};

export default AddCategory;
