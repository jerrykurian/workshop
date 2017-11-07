package com.assetify.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.assetify.domain.Asset;

import com.assetify.repository.AssetRepository;
import com.assetify.web.rest.errors.BadRequestAlertException;
import com.assetify.web.rest.util.HeaderUtil;
import com.assetify.web.rest.util.PaginationUtil;
import com.assetify.service.dto.AssetDTO;
import com.assetify.service.mapper.AssetMapper;
import io.swagger.annotations.ApiParam;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Asset.
 */
@RestController
@RequestMapping("/api")
public class AssetResource {

    private final Logger log = LoggerFactory.getLogger(AssetResource.class);

    private static final String ENTITY_NAME = "asset";

    private final AssetRepository assetRepository;

    private final AssetMapper assetMapper;

    public AssetResource(AssetRepository assetRepository, AssetMapper assetMapper) {
        this.assetRepository = assetRepository;
        this.assetMapper = assetMapper;
    }

    /**
     * POST  /assets : Create a new asset.
     *
     * @param assetDTO the assetDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new assetDTO, or with status 400 (Bad Request) if the asset has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/assets")
    @Timed
    public ResponseEntity<AssetDTO> createAsset(@RequestBody AssetDTO assetDTO) throws URISyntaxException {
        log.debug("REST request to save Asset : {}", assetDTO);
        if (assetDTO.getId() != null) {
            throw new BadRequestAlertException("A new asset cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Asset asset = assetMapper.toEntity(assetDTO);
        asset = assetRepository.save(asset);
        AssetDTO result = assetMapper.toDto(asset);
        return ResponseEntity.created(new URI("/api/assets/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /assets : Updates an existing asset.
     *
     * @param assetDTO the assetDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated assetDTO,
     * or with status 400 (Bad Request) if the assetDTO is not valid,
     * or with status 500 (Internal Server Error) if the assetDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/assets")
    @Timed
    public ResponseEntity<AssetDTO> updateAsset(@RequestBody AssetDTO assetDTO) throws URISyntaxException {
        log.debug("REST request to update Asset : {}", assetDTO);
        if (assetDTO.getId() == null) {
            return createAsset(assetDTO);
        }
        Asset asset = assetMapper.toEntity(assetDTO);
        asset = assetRepository.save(asset);
        AssetDTO result = assetMapper.toDto(asset);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, assetDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /assets : get all the assets.
     *
     * @param pageable the pagination information
     * @return the ResponseEntity with status 200 (OK) and the list of assets in body
     */
    @GetMapping("/assets")
    @Timed
    public ResponseEntity<List<AssetDTO>> getAllAssets(@ApiParam Pageable pageable) {
        log.debug("REST request to get a page of Assets");
        Page<Asset> page = assetRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(page, "/api/assets");
        return new ResponseEntity<>(assetMapper.toDto(page.getContent()), headers, HttpStatus.OK);
    }

    /**
     * GET  /assets/:id : get the "id" asset.
     *
     * @param id the id of the assetDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the assetDTO, or with status 404 (Not Found)
     */
    @GetMapping("/assets/{id}")
    @Timed
    public ResponseEntity<AssetDTO> getAsset(@PathVariable Long id) {
        log.debug("REST request to get Asset : {}", id);
        Asset asset = assetRepository.findOne(id);
        AssetDTO assetDTO = assetMapper.toDto(asset);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(assetDTO));
    }

    /**
     * DELETE  /assets/:id : delete the "id" asset.
     *
     * @param id the id of the assetDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/assets/{id}")
    @Timed
    public ResponseEntity<Void> deleteAsset(@PathVariable Long id) {
        log.debug("REST request to delete Asset : {}", id);
        assetRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
