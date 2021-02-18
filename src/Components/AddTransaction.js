import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';

// Redux
import { useDispatch } from 'react-redux';
import { addTransaction } from '../store/actions/transactionsAction';


function AddTransaction() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const onsubmit = () => {
        if (!title || !price) {
            return alert("Please fill all the fields");
        }

        const id = Math.floor(Math.random() * 100000000);

        const newTransaction = {
            id,
            title,
            price: +price,
        };
        dispatch(addTransaction({ ...newTransaction }));
    };
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={{ ...StyleSheet.item }} >
                        <Input placeholder="Expense Title" onChangeText={(title) => setTitle(title)} />
                    </Item>
                    <Item style={{ ...StyleSheet.item }} >
                        <Input placeholder="Expense Price" keyboardType="number-pad"
                            onChangeText={(price) => setPrice(price)}
                            onSubmitEditing={onsubmit}
                        />
                    </Item>
                </Form>
            </Content>

        </Container >
    )


}

const styles = StyleSheet.create({
    item: {
        marginVertical: 20
    }
})

export default AddTransaction;  
