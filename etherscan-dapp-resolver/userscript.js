// ==UserScript==
// @name         Etherscan Dapp Resolver
// @namespace    https://dappradar.com
// @version      0.1
// @description  Resolves a dapp by smart contract address on Etherscan
// @author       @SJanuskas
// @match        https://etherscan.io/address/*
// @icon         https://www.google.com/s2/favicons?domain=dappradar.com
// @run-at document_idle
// @require https://code.jquery.com/jquery-3.6.0.min.js

// ==/UserScript==

(function() {
    'use strict';

    const API_ENDPOINT = 'https://api.dappradar.com/xs3c89q0fi5chjwa/dapps/smart-contract/';
    const API_KEY = 'REPLACE THIS WITH YOUR DAPPRADAR API KEY';

    $(document).ready(function () {
        run();
        async function run() {
            let url = window.location.href;
            let matches = window.location.href.match(/0x[a-fA-F0-9]{40}/i);
            let address = matches[0];
            let dapp = 'Not listed';

            console.log(matches);
            if (address.length === 42) {
                let response = await fetch(API_ENDPOINT + address, {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-BLOBR-KEY': API_KEY
                    },
                });
                let data = await response.json();

                if (data.success && data.resultCount > 0) {
                    let dappData = data.results[0];
                    dapp = `<img src="${dappData.logo}" width="20" /> <a target="_blank" href="${dappData.link}">${dappData.name}</a>`;
                }
            }

            let cardBody = $('h3:contains("More Info")').parent();
            let html = '';
            html += '<div id="ContentPlaceHolder1_tr_tokeninfo">';
            html += '<h4 class="text-cap mb-1">';'';
            html += '<span class="d-md-none d-lg-inline-block me-1">Listed on DappRadar.com</span></h4>';
            html += '<div class="d-flex align-items-center gap-1 mt-2">';
            html += '<span id="dapp">' + dapp + '</span>';
            html += '</div>';
            html += '</div>';

            $(cardBody).append(html);
        }
    });
})();