<template>
    <div class="user_page">
        <div class="search-bar">
                <b-form-input
                @input="sarch_text()"
                v-model="sarch.text"
                type="text"
                placeholder="Sarch Guides"
                ></b-form-input>
                <span class="sarch-icon">
                    <i class="fas fa-search"></i>
                </span>
        </div>
    </div>
</template>